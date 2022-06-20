
const changeModalState = (state) => {
    const pictureSize = document.querySelectorAll("#size"),
          pictureMaterial = document.querySelectorAll("#material"),
          pictureOptions = document.querySelectorAll("#options"),
          picturePromocode = document.querySelectorAll('.promocode');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SELECT' :
                      state[prop] = item.value;
                      break;

                    case 'INPUT' :
                      state[prop] = item.value;
                }
                console.log(state);
            });
        });
    }
    bindActionToElems('change', pictureSize, 'size');
    bindActionToElems('change', pictureMaterial, 'material');
    bindActionToElems('change', pictureOptions, 'option');
    bindActionToElems('input', picturePromocode, 'promocode');
};
export default changeModalState;