#!/bin/bash

# @author Tom Neutens (tomneutens@gmail.com)
# IMPORTANT! Run the install script from the directory where you put it! It uses the location from where it is run to configure the paths to the executables!

# @date 02/12/2019 (2nd december 2019)

work_dir=$PWD
install_command=apt-get

# utility functions for shared commands between platforms

# check if running as root
check_for_root () {
    if [ $(/usr/bin/id -u) -ne 0 ]
    then
        echo "Not running as root, you will have to grant permissions to install dependencies."
        root=1
    else
        echo "Running as root..."
        root=0
    fi
}

# Check if mongodb is installed_
check_mongodb_install() {
    if [[ $(mongod --version) == "db version v"* ]]
    then
        echo "MongoDB already installed."
    else
        echo "MongoDB is not installed, trying to install."
        mongo_public_key=$(wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -)
        if [[ $mongo_public_key == *"OK"* ]]
        then
            echo "MongoDB public key added"
        else 
            sudo $install_command -y install gnupg
            wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
            echo "MongoDB public key added"
        fi
        # Install MongoDB for your specific OS release
        . /etc/os-release # get you OS ID and VERSION CODENAME
        echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/"$(ID)" "$(VERSION_CODENAME)"/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
        sudo $install_command update 
        sudo $install_command install -y mongodb-org 
    fi
    # Make database directory writable for all users
    sudo mkdir /data/
    sudo mkdir /data/db
    sudo chmod -R go+w /data/db
}

# Check if python3 is installed
check_python_install () {
    if command -v python3 &>/dev/null
    then
        echo "Python 3 already installed."
    else
        echo "Python 3 is not installed, trying to install."
        sudo $install_command update
        sudo $install_command install -y python3.6
    fi
    echo "Checking if pyserial is installed."
    python3 -c "import serial"
    res=$?
    if [ $res -eq 0 ]
    then
        echo "Pyserial module already installed!"
    else
        echo "Pyserial not installed, trying to install using pip3."
        echo "Checking if pip3 is installed."
        if which pip3 > /dev/null
        then
            echo "pip3 is installed, skipping..."
        else
            echo "Trying to install pip."
            sudo $install_command install -y python3-pip
        fi
        echo "Installing pyserial using pip."
        python3 -m pip install pyserial
        echo "Done installing pyserial."
    fi
}

# Check if nodejs is installed
check_nodejs_install () {
    if [ -x "$(command -v node)" ] && [[ $(node -v) == v12* ]]
    then
        echo "nodejs v12 (lts) is installed, skipping..."
        echo "fixing potential missing packages"
        sudo npm audit fix
    else
        echo "Installing latest lts version of nodejs using root permissions.."
        # add deb.nodesource repo commands
        sudo $install_command update
        sudo $install_command -y install curl dirmngr apt-transport-https lsb-release ca-certificates
        sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        # install node
        sudo $install_command -y install nodejs
        # update npm
        sudo npm install -g npm
    fi
}


#check os type
if [ $OSTYPE == "linux-gnu" ]
then
    echo "Installing for gnu-linux system."
    install_command=apt-get
    
    echo "Updating package manager"
    sudo $install_command update

    # Check if script is run as root
    check_for_root

    # Check if MongoDB is installed
    check_mongodb_install

    # Check if python3 is installed
    check_python_install

    # Check nodejs install
    check_nodejs_install

    # Create desktop file if not existant
    touch ./dwenguinoblockly.desktop
    # Empty the file
    > ./dwenguinoblockly.desktop
    # Write contents
    echo '[Desktop Entry]' >> ./dwenguinoblockly.desktop
    echo 'Type=Application' >> ./dwenguinoblockly.desktop
    echo 'Terminal=false' >> ./dwenguinoblockly.desktop
    echo 'Name=dwenguinoblockly' >> ./dwenguinoblockly.desktop
    echo "Icon=$(pwd)/dwengo_robot_plain.svg" >> ./dwenguinoblockly.desktop
    echo "Exec=$(pwd)/start.sh" >> ./dwenguinoblockly.desktop

    chmod u+x ./dwenguinoblockly.desktop
    cp ./dwenguinoblockly.desktop ~/Desktop/dwenguinoblockly.desktop
    gio set ~/Desktop/dwenguinoblockly.desktop "metadata::trusted" yes
    rm ./dwenguinoblockly.desktop
    echo "Created desktop icon!"

    # Install node modules
    npm install

    # Configure local environment variables for nodejs application
    touch $work_dir/backend/.env
    > $work_dir/backend/.env
    echo "NODE_ENV=development" > $work_dir/backend/.env
    echo "ACCESS_TOKEN_SECRET=ThF0yV1sY42aunmy1dUEVwn1ueZn3W67aIfCu9ieRJ9n7KkKWCyfj7MmaiRzawlNSUeSFbfyiUpal7cN4mpaSm8DsI4FFUWmqeP8h1INRtcUMwLokuw7SIvX0LfMGGuzqEnj9cQzABGlXg3Lk0vc5y" >> $work_dir/backend/.env
    echo "REFRESH_TOKEN_SECRET=7cLkYItoMJHW4cXauNhb2PxeHzcLEPlX1EzIemMFcN54bNeQHkGcWfQhbmLvWJL4BalUxa7KoTIqMf8NVXpC5a5ivAsAXENYWFFyMfJLiJylHqLBEAsSpgQ3C3SvtIwUrqDH896La8DJtJpIIiVwJv" >> $work_dir/backend/.env
    echo "EMAIL_HOST=smtp.ethereal.email" >> $work_dir/backend/.env
    echo "EMAIL_PORT=587" >> $work_dir/backend/.env
    echo "EMAIL_USER=lyda.grady61@ethereal.email" >> $work_dir/backend/.env
    echo "EMAIL_PASSWORD=KdPMjvvxchp6ps5YXq" >> $work_dir/backend/.env
    echo "EMAIL_FROM_ADDRESS=noreply@dwengo.org" >> $work_dir/backend/.env
    echo "EMAIL_FROM_NAME=\"Dwengo\"" >> $work_dir/backend/.env
    echo "SERVER_URL=http://localhost:12032/" >> $work_dir/backend/.env
    echo "STATIC_SERVING_URL=http://localhost:12032/dwenguinoblockly" >> $work_dir/backend/.env
    
    # Configure start file
    echo "#!/bin/bash" > $work_dir/start.sh
    echo "mongod --fork --syslog" > $work_dir/start.sh
    echo "$work_dir/node_modules/electron/dist/electron $work_dir/Blockly-for-Dwenguino/index.html --no-sandbox &" >> $work_dir/start.sh # Start electron
    echo 'electronPid=$!' >> $work_dir/start.sh # get process id for the latest command
    echo "cd $work_dir/backend/" >> $work_dir/start.sh # for some weird reason we have to be inside the folder, before calling node to run the js file
    echo "node -r dotenv/config --experimental-modules index.js &" >> $work_dir/start.sh # start the backend
    echo "cd $work_dir" >> $work_dir/start.sh # and go back to wherever you came from
    echo 'nodePid=$!' >> $work_dir/start.sh # get the process id for the latest command
    echo 'echo "DwenguinoBlockly is running"' >> $work_dir/start.sh
    echo 'wait $electronPid' >> $work_dir/start.sh # Wait until electron environment is closed
    echo 'kill $nodePid' >> $work_dir/start.sh # Kill the backend application
    echo 'echo "Quitting DwenguinoBlockly"' >> $work_dir/start.sh
    chmod +x $work_dir/start.sh

    # Configure make binaries
    rm $work_dir/backend/compilation/bin/make
    cp $work_dir/backend/compilation/bin/linux/make $work_dir/backend/compilation/bin/make
    echo "Configured make binaries for linux!"

    echo "Adding user to dialout group to get access to the USB ports"
    sudo usermod -a -G dialout $USER
    sudo usermod -a -G tty $USER
    sudo chmod 666 /dev/ttyACM*

    echo "---------------------------------------------------------------------------------------"
    echo "Configured start script!"
    echo "Installation completed, you can launch DwenguinoBlockly using the desktop icon!"
    echo "IMPORTANT! If you can not upload your program to the board because of a permission denied error\
 you should REBOOT your computer and try again.\
Some of the changes made by the script require a reboot before they take effect"
    echo "---------------------------------------------------------------------------------------"

elif [ $OSTYPE ==  "darwin" ]
then
    # MACOS config
    echo "MACOS install is not supported right now"
    
    echo "Checking xcode install"
    if ! command -v brew config &> /dev/null
    then
        echo "xcode or xcode command line tools could not be found"
        echo "You have to install them before running this script"
        echo "https://developer.apple.com/xcode/"
        exit 1
    fi
    
    install_command=brew

    # Check if script is run as root
    check_for_root

    # Check if python3 is installed
    check_python_install

    # Check nodejs install
    check_nodejs_install

    # Configure make binaries and some basic linux utils for mac
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"
    brew install coreutils
    brew install make
    brew install nano
    # Get make location
    makeLocation=`which make`
    # Create symbolic link in backend to the make location
    ln -s $makeLocation $work_dir/backend/compilation/macos/make
    echo "Configured make binaries for macos"

    # Configure start file
    echo "#!/bin/bash" > dwenguinoblockly.command
    echo "$work_dir/node_modules/electron/dist/electron $work_dir/Blockly-for-Dwenguino/index.html --no-sandbox &" >> dwenguinoblockly.command # Start electron
    echo 'electronPid=$!' >> dwenguinoblockly.command # get process id for the latest command
    echo "cd $work_dir/backend/" >> dwenguinoblockly.command # for some weird reason we have to be inside the folder, before calling node to run the js file
    echo "node --experimental-modules index.js &" >> dwenguinoblockly.command # start the backend
    echo "cd $work_dir" >> dwenguinoblockly.command # and go back to wherever you came from
    echo 'nodePid=$!' >> dwenguinoblockly.command # get the process id for the latest command
    echo 'echo "DwenguinoBlockly is running"' >> dwenguinoblockly.command
    echo 'wait $electronPid' >> dwenguinoblockly.command # Wait until electron environment is closed
    echo 'kill $nodePid' >> dwenguinoblockly.command # Kill the backend application
    echo 'echo "Quitting DwenguinoBlockly"' >> dwenguinoblockly.command
    chmod +x dwenguinoblockly.command

    # Copy start file to desktop
    cp dwenguinoblockly.command ~/Desktop

    # Install node modules
    npm install --save electron-prebuilt
    npm install



elif [ $OSTYPE == "win32" ]
then
    # Windows config
    echo "Windows install is not supported right now"

    # Configure make binaries
    rm ./backend/compilation/bin/make
    cp ./backend/compilation/bin/windows/make.exe ./backend/compilation/bin/make
    echo "Configured make binaries for windows"
fi
