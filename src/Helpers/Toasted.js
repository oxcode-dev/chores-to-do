import  Toasted from 'toastedjs';
class ToastedAlert {

    success(message){
      let toasted = new Toasted();
      toasted.success(message, {
        position: "bottom-right",
        duration : 5000,
        theme : 'bootstrap',
      })
    }

    error(message){
      let toasted = new Toasted();
      toasted.error(message, {
        position: "bottom-right",
        duration : 5000,
        theme : 'bootstrap',
      })
    }
}

export const toasted = new ToastedAlert();