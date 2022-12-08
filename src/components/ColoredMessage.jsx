export const ColoredMessage = (props) => {
  // props を分割代入
  const { color, children } = props;
  // {color: "blue", message: " お元気ですか？ "}
    const contentStyle = {
      //-- color: "blue",
      color, //props.color ← 省略記号が使える
      fontSize: "20px"
  };

  //-- return <p style={contentStyle}> お元気ですか？ </p>;
  // // props.childrenに変更
  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};
