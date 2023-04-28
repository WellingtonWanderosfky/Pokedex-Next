import styles from "./SliderZoom.module.css";


const SliderZoom = () => {
    
    function handleMoveOn(){
        console.log("Entrei");
        const box = document.querySelector('.SliderZoom_box__IPQWU');
        const img = document.querySelector('img');
        box && box.addEventListener('mousemove', (e : any) => {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            const width = e.target.getBoundingClientRect().width;
            const height = e.target.getBoundingClientRect().height;
    
            img && (img.style.transformOrigin = `${x / width * 100}% ${y / height * 100}%`);
            img && (img.style.transform = 'scale(2)');
        }
        )
    }
  return (
    <div className={styles.box} onClick={handleMoveOn}>
       <img src="https://assets.vtex.app/unsafe/804x603/center/middle/https%3A%2F%2Fstoreframework.vtexassets.com%2Farquivos%2Fids%2F190932%2Fmouse-black.jpg%3Fv%3D1767729450"></img>
    </div>
  )
}

export default SliderZoom
