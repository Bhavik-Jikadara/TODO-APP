const app = new Vue({
    el: "#app",
    data:{
        message: "",
        editing: false,
        editingId: 0,
        lists: []
    },
    methods:{
        addItem(){
            if (this.message !== ""){
                if(this.editing){
                    this.lists[this.editingId] = this.message,
                    this.message = "",
                    this.editing = false
                }
                else{
                    this.lists.push(this.message),
                    this.message = ""
                }
            }
        },
        deleteItem(index){
            this.lists.splice(index, 1)
        },
        editItem(index){
            this.message = this.lists[index],
            this.editing = true,
            this.editingId = index
        }   
    }   
})