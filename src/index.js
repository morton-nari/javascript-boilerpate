// DEMO JOKE APP
// import generateJoke from './generateJoke'
import "regenerator-runtime/runtime";
import './styles/main.scss'
// import laughing from './assets/laughing.svg'

import interview from "./interview";
import interviewOne from "./recursiveFunc";

import arrayFunc from "./arrayFunc";
import constructivePattern from "./constructivePattern";
import getFeatureState from "./summary";

const loadModule = () => {
    import("./recModule.js").then(({ default: recursiveListRes }) => {
        recursiveListRes();
    });
};

document.getElementById("recurcive").addEventListener("click", loadModule);
interview();
// recursiveList()
constructivePattern()
interviewOne();
arrayFunc();
getFeatureState()




