import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    console.log(" レンダリング ");


    // State の定義
    const [num, setNum] = useState(0);

    // ボタンを推したときに実行する関数を定義
    const onClickButton = () => {
        //-- alert();
        // setNum(num + 1);
        setNum((prev) => prev + 1);
    };


    // // ピンク用に追加
    // const contentPinkStyle = {
    //     color: "pink",
    //     fontSize: "20px"
    // };

    return (
        <>
        <h1 style={{ color: "red"}}> こんにちは! </h1>
        {/* <ColoredMessage color="blue" message=" お元気ですか？ "/> */}
        <ColoredMessage color="blue"> お元気ですか？ </ColoredMessage>
        {/* <p style={contentPinkStyle}> 元気です </p> */}
        {/* <ColoredMessage color="pink" message=" 元気です " /> */}
        <ColoredMessage color="pink">元気です！ </ColoredMessage>
        <button onClick={onClickButton}> ボタン </button>
        <p>{num}</p>
        </>
        );
    };
