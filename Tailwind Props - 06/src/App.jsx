import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>

      <div className="gap-5 flex flex-col">
        <Card username="Abdullah" logo="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/393987933_857636875871739_5684918896710340503_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGvah7NTZxqq1WQO1Y8Xtvav7zJYQIRiee_vMlhAhGJ572-KGg8T3jsksnpDsINMsM0aGN7hF0qJZ89922cmgAJ&_nc_ohc=Zg-TueTP6YEQ7kNvgFpQrK5&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A-6di45ah7E1eepF5VF_8cM&oh=00_AYDkWzy7VIAlnJt4tjBhURpDSCXHsAV3kt5a4ZM4PftoAA&oe=672984D4" postImage="https://avatars.githubusercontent.com/u/112177631?v=4"/>
        <Card username="Adil" postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeHPM6NAIMaFOUu2pko-i_8-Wt9TLzuBU1Ba31MvO4FTUDLkS26nr7zAGqt0TnF_WR2cgUsk52U9WPphXNQEX6q6&_nc_ohc=Bi2ci65_RAYQ7kNvgGtqdI8&_nc_zt=24&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AP14w_SmDQWQ3Ee1gXsmvYS&oh=00_AYBH9MdSnsdIOa2e170_AgjHxciv6rJZH6cbGv2aObeUpA&oe=674B433A"/>
        <Card username="Jalib" logo="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/380705474_278519311781012_1266345952442183551_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtkiniW54mmTaOcug3VXZ0qpdi-uQWg3Sql2L65BaDdO3bKzoxEvjyGUGEsmv3FBJh3RIGif7XlVGCtt-hy8Ox&_nc_ohc=b9Q6zYSPo4AQ7kNvgE7GZly&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A8ScPYgLqfx_FIk3cN2hTaq&oh=00_AYAW-kk0RRI1mB010b9UrsX4XzRKlBt-khfaBaqi4zAV8A&oe=67298831" postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/367451840_255269564105987_2598303547546493246_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-efezjchqzJBhzUNxMzADxhaDoXm7bPDGFoOhebts8AgFMwdvVrNce6gqefn1HyFvIy86yU0gDJsi73toU5xl&_nc_ohc=0drbb7w2AjAQ7kNvgEiWkUC&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ASao0h-JNpMQE-5hfthHp9X&oh=00_AYBi8XM2t3SYrexDCumVwlnomqesjk0zzX--BDg0S0yWkA&oe=6729B6BD"/>
      </div>
    </>
  );
}

export default App;
