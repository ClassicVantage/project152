AFRAME.registerComponent('movecaronClick',{
    schema:{
        moveX:{type:"number", default:1}

    },

tick:function(){
    window.addEventListener("click",(e)=>{
        this.data.moveX=this.data.moveX+0.01
    })
   
    var position=this.el.getAttribute("position")
    position.x=this.data.moveX
    this.el.setAtrribute("position",{x:position.x,y:position.y,z:position.z})
}

}
    
    )