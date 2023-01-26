import { useEffect} from "react";
const Header = () => {
  useEffect(() => {
    fetch("./logo.png", {
      headers: {
        Accept: "image/png",
        "Content-Type": "image/png",
      },
    })
      .then((res) => res.blob())
      .then(
        (result) => {
          let img = URL.createObjectURL(result)
          document.querySelector("#logo").setAttribute("src",img)
        },
        (error) => {
          console.log(error)
        }
      );

    fetch("./logo_icon.png",{
      headers: {
        Accept: "image/png",
        "Content-Type" : "image/png"
      }
    }).then((res) => res.blob())
    .then(
      (result) =>{
        let img2 = URL.createObjectURL(result)
        document.querySelector("#logo_icon").setAttribute("src", img2)
      },
      (error)=>{
        console.log(error)
      }
    )
  }, []);

  return (
    <header className="mb-3">
      <div className="bg-dark ">
        <div className="d-flex ">
          <div className="align-self-center">
            <img id="logo" alt="logo"></img>
          </div>
          <div>
            <img id="logo_icon" width={125} height={125} alt="logo"></img>
          </div>
        </div>
        
      </div>
      
    </header>
  );
};

export default Header;
