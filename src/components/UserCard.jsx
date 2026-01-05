import React from "react";

const UserCard = ({ user }) => {
  const { name, email, avatar, role } = user;
  return (
    <div className="group bg-[#212123] rounded-2xl p-3 px-4 py-5 w-90 max-w-90 sm:w-120 sm:max-w-120 flex gap-5 items-center hover:bg-[#36363A] transition-all duration-300 cursor-pointer">
      {/* user image */}
      <div className=" w-1/5 overflow-hidden hidden sm:block">
        <img
          className="size-12 border-[1.35px] border-white/10 rounded-full object-contain"
          src={avatar || "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={name}
        />
      </div>

      {/* userdetails */}
      <div className="details min-w-2/5 flex flex-col gap-1.5">
        <h2 className="text-[14.3px] leading-none">{name}</h2>
        <h5 className="text-sm leading-none text-zinc-500">
          {email}...
        </h5>
      </div>

      {/* button and status */}
      <div className="extra-details  flex items-center gap-2 text-xs whitespace-nowrap">
        <button
          className={`cursor-pointer ${
            role === "customer" ? "bg-green-500/15" : "bg-red-500/15"
          } px-3 py-1 rounded-full flex items-center gap-2`}
        >
          <div
            className={`dot size-1.5 rounded-full ${
              role === "customer" ? "bg-green-400" : "bg-red-400"
            }`}
          ></div>
          <p
            className={`${
              role === "customer" ? "text-green-400" : "text-red-400"
            }`}
          >
            Active
          </p>
        </button>

        <button className="cursor-pointer border border-white/15 px-3.5 py-1.5  rounded-xl group-hover:border-white/0 hover:bg-zinc-800 transition-all duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
