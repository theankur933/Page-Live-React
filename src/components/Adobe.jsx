const Adobe = (props) => {
  return (
    <>
      <div className="main">
        <img src={props.logo1} alt="Logo" />
        <h2>Let's XD together.</h2>
        <p>
          Where teams create the world's best experiences at scale, powered by
          the leader in creative tools.
        </p>
        <a href="http://localhost:3009/">
          <button>Start Free XD Trial</button>
        </a>
      </div>
    </>
  );
};
export default Adobe;
