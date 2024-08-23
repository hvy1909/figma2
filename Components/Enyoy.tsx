import { Button } from "@mui/material";

function Enyoy() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-6">Enjoy our Unique Features</h2>

      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:flex-nowrap lg:overflow-visible gap-4 max-w-5xl mx-auto px-4 xs:flex xs:overflow-x-auto xs:snap-x scrollbar-hide">
        <div className="xs:flex-col lg:flex-row min-w-[280px] bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/flash.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Instant Transactions
            </h3>
            <hr />
            <p className="text-sm">
              Enjoy seamless gaming with instant deposits and withdrawals. No
              delays in play, ensuring a smooth, swift gaming experience.
            </p>
          </div>
        </div>
        <div className="xs:flex-col min-w-[280px] lg:flex-row bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/card.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Swift Payouts, Guaranteed
            </h3>
            <hr />
            <p className="text-sm">
              Guaranteed swift payouts: Receive winnings in under 10 minutes.
              Quick, efficient fund access ensures player satisfaction.
            </p>
          </div>
        </div>
        <div className="xs:flex-col min-w-[280px] lg:flex-row bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/cupcard.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Monthly Freerolls
            </h3>
            <hr />
            <p className="text-sm">
              Compete in our monthly freerolls for the chance to win big.
              Exciting tournaments add an extra thrill to your gaming
              experience.
            </p>
          </div>
        </div>
        <div className="xs:flex-col min-w-[280px] lg:flex-row bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/dealergirl.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              24/7 Support
            </h3>
            <hr />
            <p className="text-sm">
              24/7 customer support ready to assist with any inquiries. Our team
              ensures a seamless gaming experience for every player.
            </p>
          </div>
        </div>
        <div className="xs:flex-col min-w-[280px] lg:flex-row bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/shile.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Secure and Fair Gaming
            </h3>
            <hr />
            <p className="text-sm">
              Committed to secure and fair gaming, employing the latest
              technology to ensure a safe and trustworthy environment for all.
            </p>
          </div>
        </div>
        <div className="xs:flex-col min-w-[280px] lg:flex-row bg-gradient-to-r from-[#FF0000]/40 to-[#FF0000]/0 rounded-tl-[50px] rounded-bl-[50px] p-6 flex items-start text-left snap-start">
          <img
            src="/hatcard.png"
            alt="Instant Transactions"
            className="h-36 mb-4 w-48"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              VIP Sponsorship
            </h3>
            <hr />
            <p className="text-sm">
              VIP sponsorship offers exclusive access to live events, with all
              expenses paid, including travel. Experience elite poker play.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button
          className="w-[210px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
            width: 210,
          }}
        >
          JOIN NOW!
        </Button>
      </div>
    </div>
  );
}

export default Enyoy;
