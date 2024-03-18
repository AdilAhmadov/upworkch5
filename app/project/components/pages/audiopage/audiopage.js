
const audiopageModule = (() => {
    'use strict';

   
    function onInit() {
       serviceModule.addEmulatorScenarioNoControlSystem("./app/project/components/pages/audiopage/audiopage-emulator.json");
       // Uncomment the below line and comment the above to load the emulator all the time.
       //serviceModule.addEmulatorScenario("./app/project/components/pages/audiopage/audiopage-emulator.json");       
    }

    /**
     * private method for page class initialization
     */
    let loadedSubId = CrComLib.subscribeState('o', 'ch5-import-htmlsnippet:audiopage-import-page', (value) => {
        if (value['loaded']) {
            onInit();
            setTimeout(() => {
                CrComLib.unsubscribeState('o', 'ch5-import-htmlsnippet:audiopage-import-page', loadedSubId);
                loadedSubId = '';
            });
        }
    }); 

    /**
     * All public method and properties are exported here
     */
    return {
   

    };

    // END::CHANGEAREA

})();