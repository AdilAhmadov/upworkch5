

const shadespageModule = (() => {
    'use strict';

    // BEGIN::CHANGEAREA - your javascript for page module code goes here         

    /**
     * Initialize Method
     */
    function onInit() {
       serviceModule.addEmulatorScenarioNoControlSystem("./app/project/components/pages/shadespage/shadespage-emulator.json");
       // Uncomment the below line and comment the above to load the emulator all the time.
       // serviceModule.addEmulatorScenario("./app/project/components/pages/shadespage/shadespage-emulator.json");       
    }

    /**
     * private method for page class initialization
     */
    let loadedSubId = CrComLib.subscribeState('o', 'ch5-import-htmlsnippet:shadespage-import-page', (value) => {
        if (value['loaded']) {
            onInit();
            setTimeout(() => {
                CrComLib.unsubscribeState('o', 'ch5-import-htmlsnippet:shadespage-import-page', loadedSubId);
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