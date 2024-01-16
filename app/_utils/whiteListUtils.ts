export const navBarSkipPathList:string[]=["/wv/*"]
export const footerSkipList:string[]=["/wv/*"]
export function checkPathInWhiteList(path:string, whiteList:string[]):boolean{
     return whiteList.some((regex)=>path.match(regex))
}