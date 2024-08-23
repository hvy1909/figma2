import { Button } from "@mui/material";

function Quick() {
  return (
    <div
      id="container"
      className=" flex lg:w-2/5 xs:w-full space-y-6 lg:space-y-0 lg:space-x-6 p-8"
    >
      <div id="girl">
        <img
          className="w-96 absolute xs:hidden lg:block left-0 -top-0.5"
          src="/girl.png"
          alt=""
        />
      </div>
      <div id="content" className="flex-col w-full">
        <img
          className="lg:w-full md:w-3/5 xs:block lg:hidden md:ml-36"
          src="/cashmachine.png"
        />
        <h1 className="text-2xl text-center font-bold ">Quick Withdrawal</h1>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Choose Payment Method:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-gradient-to-r from-[#601414] to-[#9A0000] appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/icbit.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
              <span className="mr-5 mt-1">
                <img className="w-7" src="/down.png" alt="khong" />
              </span>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Amount in USD:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex  bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="text-white text-lg mb-2 block text-left">
            Receiving Wallet Address:
          </label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-[210px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            startIcon={<img width="22px" height="22px" src="/postmoney.png" />}
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
            Deposit
          </Button>
        </div>
        <p className="my-5 text-center">
          You will receive the Dollar amount in the crypto selected.
        </p>
        <p className="my-5 text-center">
          You will receive the Dollar amount in the crypto selected. Need
          assistance? Contact us via Live Chat for instant support.
        </p>
      </div>
      <div id="money" className="lg:block xs:hidden">
        <img className="w-96 absolute  right-0 -top-0.5" src="/money.png" />
      </div>
    </div>
  );
}

export default Quick;
