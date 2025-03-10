import { DwenguinoComponent, DwenguinoComponentTypesEnum } from './DwenguinoComponent.js';

export { Lcd }

class Lcd extends DwenguinoComponent{
    constructor(){
        super();
    }

    toString(){
        return 'lcd';
    }

    static getType(){
        return DwenguinoComponentTypesEnum.LCD;
    }

    static getDescription(){
        return DwenguinoBlocklyLanguageSettings.translateFrom('simulator',['lcdDescription']);
    }

    static getInputPins(){
        return [];
    }

    static getOutputPins(){
        return [];
    }

}