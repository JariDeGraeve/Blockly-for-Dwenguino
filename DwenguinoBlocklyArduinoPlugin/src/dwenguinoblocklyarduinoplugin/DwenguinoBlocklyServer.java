/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dwenguinoblocklyarduinoplugin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javafx.application.Platform;
import javafx.stage.FileChooser;
import javafx.stage.Window;
import javax.swing.SwingUtilities;

import java.lang.reflect.InvocationTargetException;
import processing.app.Editor;

/**
 *
 * @author Tom
 */
public class DwenguinoBlocklyServer {

    private String lastOpenedLocation = System.getProperty("user.home");
    private Editor editor;
    private Window ownerWindow;

    
    public DwenguinoBlocklyServer(Editor editor, Window ownerWindow){
        this.editor = editor;
        this.ownerWindow = ownerWindow;
    }
    /**
     * This method is called from javascript. It lets the user select a location
     * where to save the blocks to and saves them.
     *
     * @param xml The xml structure of the created block program.
     */
    public void saveBlocks(String xml) {
        //System.out.println("saving blocks");
        
        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File(lastOpenedLocation));
        fileChooser.setTitle("Save");
        fileChooser.getExtensionFilters().addAll(
                new FileChooser.ExtensionFilter("XML files", "*.xml")
        );
        File selectedFile = fileChooser.showSaveDialog(ownerWindow);
        if (selectedFile != null) {
            if (selectedFile.getName().matches("^.*\\.xml$")) {
                // filename is OK as-is
            } else {
                selectedFile = new File(selectedFile.toString() + ".xml");  // append .xml if "foo.jpg.xml" is OK
            }
            lastOpenedLocation = selectedFile.getParent();
            try {
                BufferedWriter bWriter = new BufferedWriter(new FileWriter(selectedFile));
                bWriter.write(xml);
                bWriter.flush();
                bWriter.close();
            } catch (IOException ex) {
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    /**
     * This method is called from javascript. It lets the user select a location
     * where to save the scenario to and saves it.
     *
     * @param xml The xml structure of the created scenario.
     */
    public void saveScenario(String xml) {
        
        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File(lastOpenedLocation));
        fileChooser.setInitialFileName("scenario");
        fileChooser.setTitle("Save");
        fileChooser.getExtensionFilters().addAll(
                new FileChooser.ExtensionFilter("XML files", "*.xml")
        );
        File selectedFile = fileChooser.showSaveDialog(ownerWindow);
        if (selectedFile != null) {
            if (selectedFile.getName().matches("^.*\\.xml$")) {
                // filename is OK as-is
            } else {
                selectedFile = new File(selectedFile.toString() + ".xml");  // append .xml if "foo.jpg.xml" is OK
            }
            lastOpenedLocation = selectedFile.getParent();
            try {
                BufferedWriter bWriter = new BufferedWriter(new FileWriter(selectedFile));
                bWriter.write(xml);
                bWriter.flush();
                bWriter.close();
            } catch (IOException ex) {
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    /**
     * This method is called from javascript. It lets the user select a location
     * where to save the generated code to and saves them.
     *
     * @param code The Arduino c code generated from the blocks.
     */
    public void saveCode(String code) {
        //System.out.println("Saving code");
        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File(lastOpenedLocation));
        fileChooser.setTitle("Save");
        fileChooser.getExtensionFilters().addAll(
                new FileChooser.ExtensionFilter("Arduino files", "*.ino", "*.c", "*.cpp")
        );
        //System.out.println("Show file chooser");
        File file = fileChooser.showSaveDialog(ownerWindow);
        File selectedFile = null;
        //System.out.println("File has been selected");
        if (file != null) {
            if (!file.getName().matches("*.xml")) {
                // filename is OK as-is
                selectedFile = file;
            } else {
                selectedFile = new File(file.toString() + ".xml");  // append .xml if "foo.jpg.xml" is OK
            }
            //System.out.println(selectedFile);
            lastOpenedLocation = selectedFile.getParent();
            //System.out.println("saved open location");
            try {
                //System.out.println("trying to writ to file");
                BufferedWriter bWriter = new BufferedWriter(new FileWriter(file));
                //System.out.println("start writing");
                bWriter.write(code);
                bWriter.flush();
                bWriter.close();
                //System.out.println("writing done");
            } catch (IOException ex) {
                //System.out.println("error while writing file!");
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
    
    /**
     * This function is called from javascript and saves the user interaction to a log file.
     * 
     * @param The log file generated by DwenguinoBlockly
     */
    
    public void saveToLog(String log){
        
        File logfile = new File(System.getProperty("user.home"), "db_logfile" + DwenguinoBlocklyArduinoPlugin.startTimestamp + ".txt");
        try {
            BufferedWriter bWriter = new BufferedWriter(new PrintWriter(logfile));
            bWriter.write(log);
            bWriter.flush();
            bWriter.close();
            
        } catch (IOException ex) {
            Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Uploads the created code to the dwenguino board.
     *
     * @param code Arduino C code
     */
    public void uploadCode(String code) {

        System.out.println("uploading code");
        SwingUtilities.invokeLater(new Runnable() {
            
            @Override
            public void run() {
                //System.out.println("code upload run method stared");
                try{
                    //System.out.println("make method");
                    java.lang.reflect.Method method;
                    //System.out.println("get DwenguinoBlocklyArduinoPlugin class");
                    Class ed = DwenguinoBlocklyArduinoPlugin.editor.getClass();
                    //System.out.println("get args");
                    Class[] cArg = new Class[1];
                    //System.out.println("set first arg as string");
                    cArg[0] = String.class;
                    //System.out.println("get setText method");
                    method = ed.getMethod("setText", cArg);
                    //System.out.println("invoke method");
                    method.invoke(editor, code);
                }catch(NoSuchMethodException e) {
                    //System.out.println("nosuchmethod");
 			DwenguinoBlocklyArduinoPlugin.editor.getCurrentTab().setText(code);
 		} catch (IllegalAccessException e) {
                    //System.out.println("illegalaccess");
 			DwenguinoBlocklyArduinoPlugin.editor.getCurrentTab().setText(code);
 		} catch (SecurityException e) {
                    //System.out.println("security");
 			DwenguinoBlocklyArduinoPlugin.editor.getCurrentTab().setText(code);
 		} catch (InvocationTargetException e) {
                    //System.out.println("invocationtarget");
 			DwenguinoBlocklyArduinoPlugin.editor.getCurrentTab().setText(code);
 		}
        
                //System.out.println("handleExport");

                DwenguinoBlocklyArduinoPlugin.editor.handleExport(false);

                //System.out.println("Done handling export");
            }
        });
        
        
        
    }

    /**
     * Loads an xml file in which the user saved his blocks.
     *
     * @return xml data for the block structure.
     */
    public String loadBlocks() {
        //System.out.println("loading blocks");
        String blockData = "";
        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File(lastOpenedLocation));
        fileChooser.setTitle("Open");
        fileChooser.getExtensionFilters().addAll(
                new FileChooser.ExtensionFilter("XML files", "*.xml")
        );
        File selectedFile = fileChooser.showOpenDialog(ownerWindow);
        //System.out.println("file selected");
        if (selectedFile != null) {
            lastOpenedLocation = selectedFile.getParent();
            //System.out.println("saved last opened location");
            try {
                BufferedReader fReader = new BufferedReader(new FileReader(selectedFile));
                blockData = fReader.lines().collect(Collectors.joining());
                fReader.close();
            } catch (FileNotFoundException ex) {
                //System.out.println("filenotfoundexception");
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                //System.out.println("ioexception");
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            }

        }

        return blockData;
    }

        /**
     * Loads an xml file in which the user saved his scenario layout.
     *
     * @return xml data for the scenario.
     */
    public String loadScenario() {
        //System.out.println("loading blocks");
        String scenarioData = "";
        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File(lastOpenedLocation));
        fileChooser.setTitle("Open");
        fileChooser.getExtensionFilters().addAll(
                new FileChooser.ExtensionFilter("XML files", "*.xml")
        );
        File selectedFile = fileChooser.showOpenDialog(ownerWindow);
        //System.out.println("file selected");
        if (selectedFile != null) {
            lastOpenedLocation = selectedFile.getParent();
            //System.out.println("saved last opened location");
            try {
                BufferedReader fReader = new BufferedReader(new FileReader(selectedFile));
                scenarioData = fReader.lines().collect(Collectors.joining());
                fReader.close();
            } catch (FileNotFoundException ex) {
                //System.out.println("filenotfoundexception");
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                //System.out.println("ioexception");
                Logger.getLogger(DwenguinoBlocklyServer.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
        return scenarioData;
    }

    public void discard() {
        //System.out.println("Are you sure you want to discard your blocks?");
    }

    public void exit() {
        Platform.exit();
    }
}


