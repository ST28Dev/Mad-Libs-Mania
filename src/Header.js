import { useEffect,useState } from "react";
const Header = () => {
  const [loaded,setLoaded] = useState(false)
    const [error,setError] = useState(false)

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
          setLoaded(true);

          let img = URL.createObjectURL(result)
          document.querySelector("#logo").setAttribute("src",img)
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <header className="mb-3">
      <div className="bg-dark p-3 d-flex justify-content-between">
        <img id="logo"></img>
      </div>
    </header>
  );
};

export default Header;
