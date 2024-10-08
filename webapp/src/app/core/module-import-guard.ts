export function throwIfAlreadyLoaded(parentModule: any, moduleName: string){
    if(parentModule){
        throw new Error(`${moduleName} has already been loaded. Import Core module in the AppModule only.` );
    }
}