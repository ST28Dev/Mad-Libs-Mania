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
  }, []);

  return (
    <header className="mb-3">
      <div className="bg-dark p-3 d-flex justify-content-between">
        <img id="logo" alt="logo"></img>
      </div>
    </header>
  );
};

export default Header;
