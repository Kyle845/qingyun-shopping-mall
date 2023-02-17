let myPlugins = {};
myPlugins.install = function(Vue,options) {
    Vue.directive(options.name,(a) =>{
        console.log(a)
    })
}

export default myPlugins; 