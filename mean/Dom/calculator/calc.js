function dis(num){
    result.value += num
}
function clearAll(){
    result.value=""
}
function output(){
    result.value=eval(result.value)
}
//remove last
function removeLast(){
    result.value=(result.value).slice(0,-1)

}