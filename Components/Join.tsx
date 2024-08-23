import { Button, TextField } from "@mui/material";

function join() {
  return (
    <div className="xs:block lg:hidden xs:bg-[#7f1d1d] xs:w-72 xs:ml-14 xs:rounded-2xl md:ml-56">
      <div>
        <div>
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
              startIcon={<img width="22px" height="22px" src="/icsent.png" />}
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
  );
}

export default join;
