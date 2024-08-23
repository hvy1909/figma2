import { Button } from "@mui/material";

function Play() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Play</h1>
        <p className="mt-2 text-sm">Your Favourite Online Poker Games.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 xs:grid-cols-2">
        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-48 lg:h-60">
          <img src="/game.png" alt="Texas Hold'em" className="h-40 w-40" />
          <p className="mt-4 text-lg font-semibold">Texas Holdem</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-48 lg:h-60">
          <img src="/omaha4.png" alt="Omaha4" className="h-40 w-40" />
          <p className="mt-4 text-lg font-semibold">Omaha4</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-48 lg:h-60">
          <img src="/omaha5.png" alt="Omaha5" className="h-40 w-40" />
          <p className="mt-4 text-lg font-semibold">Omaha5</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-48 lg:h-60">
          <img src="/poker.png" alt="Tournaments" className="h-40 w-40" />
          <p className="mt-4 text-lg font-semibold">Tournaments</p>
        </div>
      </div>

      <div className="mt-8">
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
      </div>
    </div>
  );
}

export default Play;
