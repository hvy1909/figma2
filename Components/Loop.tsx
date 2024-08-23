import { Button } from "@mui/material";

function Loop() {
  return (
    <div
      id="container"
      className="h-full flex lg:w-2/5 xs:w-full space-y-6 lg:space-y-0 lg:space-x-6 p-8"
    >
      <div id="letter" className="xs:hidden lg:block">
        <img
          className="w-96 absolute  left-0 top-36"
          src="/letter.png"
          alt="anh"
        />
      </div>
      <div id="content" className="flex-col w-full">
        <img
          className="w-full lg:hidden xs:block"
          src="/letter.png"
          alt="anh"
        />
        <h1 className="xs:text-4xl text-center font-bold mb-5">
          <p> Stay in the Loop</p>
        </h1>
        <p className="lg:text-center xs:text-left mb-5">
          Never miss out on the latest news, promotions, and exciting events!
          Sign up below to receive updates directly to your inbox.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mb-5 space-y-2 lg:space-y-0 lg:space-x-3">
          <img className="w-8" src="/lettersmall.png" alt="anh" />
          <p className="text-center">Stay Connected:</p>
          <p className="text-center">example@aceloungeclub.com</p>
        </div>

        <div className="h-12 my-5">
          <div className="h-12 relative inline-block w-full text-white">
            <div
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #FFD3D3 100%)",
              }}
              className="flex h-12  bg-white appearance-none w-full text-lg rounded-r-full rounded-bl-full shadow-lg"
            >
              <div className="w-full text-left pl-2 flex items-center rounded-r-full rounded-bl-full shadow-lg">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <input
                  placeholder="youremail@mail.com"
                  className="bg-transparent border-none w-full focus:outline-none"
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-52 my-5">
          <div className="h-52 relative inline-block w-full text-white">
            <div
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #FFD3D3 100%)",
              }}
              className="flex h-52  bg-white appearance-none w-full text-lg rounded-r-3xl rounded-bl-3xl shadow-lg"
            >
              <div className="w-full text-left items-start pl-2 flex  shadow-lg">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <textarea
                  placeholder="Text message"
                  className="bg-transparent border-none h-full w-full focus:outline-none resize-none"
                  style={{
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-[210px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            startIcon={<img width="22px" height="22px" src="/mailtrang.png" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "linear-gradient(180deg, #14FF00, #215104)",
              borderRadius: "10px",
              "&:hover": {
                background: "linear-gradient(180deg, #14FF00, #215104)",
              },
              width: 210,
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <div id="money" className="xs:hidden lg:block">
        <img
          className="w-80 absolute  bottom-0 right-3  object-cover"
          src="/girl2.png"
        />
      </div>
    </div>
  );
}

export default Loop;
