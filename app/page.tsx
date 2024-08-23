import Deposit from "@/Components/Deposit";
import Enyoy from "@/Components/Enyoy";
import Join from "@/Components/Join";
import Loop from "@/Components/Loop";
import Play from "@/Components/Play";
import Quick from "@/Components/Quick";

import { Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <div
        className=" lg:flex flex-col bg-cover bg-center lg:pt-40 xs:p-0"
        style={{
          backgroundImage: `url('/background.png')`,
        }}
      >
        <div className="xs:block lg:hidden text-right mr-3 pt-3">
          <Button
            className="shadow-lg"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "linear-gradient(180deg, #ff0000, #831414)",
              borderRadius: "15px",
              "&:hover": {
                background: "linear-gradient(180deg, #ff0000, #831414)",
              },
            }}
          >
            DOWNLOAD
          </Button>
        </div>
        <div className="lg:flex justify-evenly lg:m-0 xs:mx-10">
          {/* Section: Introduction */}
          <div>
            <div className="lg:mt-12 xs:m-0">
              <h1 className="text-4xl font-extrabold lg:my-5 xs:m-0 xs:text-center lg:text-left">
                Welcome to AceLounge Club!
              </h1>
              <h2 className="text-2xl md:text-3xl md:text-center lg:text-left font-bold my-5">
                Join us for the Grand Inauguration!
              </h2>
              <p className="lg:block xs:hidden my-5">
                We thrilled to announce the launch of AceLounge, your ultimate
                destination for thrilling poker action
              </p>

              {/* Launch Info */}
              <div className="lg:flex lg:bg-black/70 xs:bg-black/70 xs:border-collapse">
                <div className="p-2 flex-grow space-y-1 ">
                  <div className="flex items-center space-x-1">
                    <div className="uppercase text-lg text-white font-bold">
                      <p className="md:text-3xl lg:text-xl">Launch Date</p>
                    </div>
                    <div className="text-red-500">
                      <img className="w-5" src="/icrocket.png" alt="anh" />
                    </div>
                  </div>
                  <hr className="border-red-600 w-full" />

                  <div className="space-y-1 bg-opacity-50">
                    <div className="flex items-center space-x-2">
                      <div className="text-lg">
                        <img className="w-5" src="/icrank.png" alt="anh" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        <p className="md:text-3xl lg:text-xl">Tournament:</p>
                      </div>
                      <div className="font-bold text-yellow-400">
                        <p className="md:text-3xl lg:text-xl text-yellow-400">
                          Grand Inauguration Freeroll
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="text-lg">
                        <img className="w-5" src="/cup.png" alt="" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        <p className="md:text-3xl lg:text-xl"> Prize Pool:</p>
                      </div>
                      <div className="font-bold text-yellow-400">
                        <img className="w-52" src="/10000.png" alt="khong" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xs:flex ">
                  <div
                    className="lg:w-24 md:w-full lg:h-44 xs:w-52 xs:h-48 md:flex xs:flex lg:flex-col bg-gradient-to-b from-red-600 to-red-900 text-center text-white p-2 justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 0, 0, 0.9) 0%, rgba(131, 20, 20, 0.9) 100%)",
                    }}
                  >
                    <div className="md:text-3xl lg:text-4xl xs:text-4xl xs:m-3 lg:m-0 font-pathway-gothic-one  md:mr-3">
                      20
                    </div>
                    <div className="md:text-3xl lg:text-xl xs:text-3xl  uppercase">
                      jun
                    </div>
                  </div>
                  <div
                    className="lg:w-24 lg:h-44 md:w-full xs:w-52 xs:h-48 bg-gradient-to-b from-red-600 to-red-900 text-center text-white p-2 flex flex-col justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(131, 20, 20, 0.9), rgba(0, 0, 0, 0.9))",
                    }}
                  >
                    <div className="lg:text-xl md :text-3xl xs:text-3xl">
                      2:00pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Join Form */}
          <div className="xs:bg-black lg:bg-inherit xs:rounded-2xl xs:hidden lg:block">
            <div className=" xs:rounded-2xl lg:bg-black/70 lg:rounded-lg max-w-md mx-auto mt-10 xs:hidden lg:block">
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Join the Club!
              </h3>
              <form className="m-0 self-stretch flex flex-col items-center justify-center py-2.5 px-[17px] gap-5">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Full Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="23px" height="23px" src="/iconperson.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="23px" height="23px" src="/icemail.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Phone"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="22px" height="22px" src="/icphone.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <Button
                  className="w-[231px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                  startIcon={
                    <img width="22px" height="22px" src="/icsent.png" />
                  }
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
                    width: 231,
                  }}
                >
                  JOIN NOW!
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:justify-center mt-8 pb-8 lg:my-12 xs:mx-4">
          <a href="#">
            <img src="/gg.png" alt="Google Play" className="h-12 xs:h-20" />
          </a>
          <a href="#">
            <img src="/icms.png" alt="App Store" className="h-12 xs:h-20" />
          </a>
          <a href="#">
            <img src="/icms.png" alt="App Store" className="h-12 xs:h-20" />
          </a>
          <a href="#">
            <img
              src="/icappstore.png"
              alt="Download for Android"
              className="h-12 xs:h-20"
            />
          </a>
        </div>
      </div>
      <div className="w-full h-fit lg:hidden xs:block xs:bg-black xs:h-max py-14">
        <Join />
      </div>
      <div className="bg-gradient-to-r to-[#E70404] from-[#850202]  xs:px-4">
        <Play />
      </div>
      <div className="bg-gradient-to-b from-[#000000] to-[#450505]  space-y-6 lg:space-y-0 lg:space-x-6">
        <Enyoy />
      </div>
      <div className=" w-full h-fit bg-gradient-to-r from-[#850202] to-[#e60404]">
        <Deposit />
      </div>
      <div className=" h-screen relative lg:flex xs:flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#450505]">
        <Quick />
      </div>
      <div className=" h-max relative lg:flex xs:flex-col items-center justify-center bg-gradient-to-r from-[#850202] to-[#e60404]">
        <Loop />
      </div>
    </>
  );
}
