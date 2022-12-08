export const App = () => {
    // ボタンを推したときに実行する関数を定義
    const onClickButton = () => {
        alert();
    };

    // cssオブジェクト
    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    };

    return (
        <>
        <h1 style={{ color: "red"}}> こんにちは! </h1>
        <p style={contentStyle}> お元気ですか？ </p>
        <button onClick={onClickButton}> ボタン </button>
        </>
        );
    };
