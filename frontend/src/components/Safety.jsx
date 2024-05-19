import SectionHeading from "./SectionHeading";
function Safety() {
  return (
    <div
      className="mb-24 container mx-auto flex flex-col items-center px-4"
      id="safety"
    >
      <SectionHeading>
        Your safety is more important than anything!
      </SectionHeading>
      <p className="text-sm mb-3">
        Meeting new individuals is an invigorating experience, yet it's
        essential to approach interactions with caution, especially when
        engaging with unfamiliar faces. Trust your instincts and prioritize your
        safety, whether you're exchanging initial communications or arranging
        in-person meetings. While you can't predict the behavior of others,
        there are proactive measures you can take to ensure your safety while
        expanding your social circle.
      </p>
      <h3 className="font-semibold mr-auto mb-2">Online Safety</h3>
      <ul className=" mr-auto flex flex-col gap-3">
        <li>
          <span className="text-slate-400 block mb-1">
            Avoid Sharing Financial Information Online
          </span>
          <p className="text-sm">
            It's essential to prioritize your safety and financial security
            while engaging online. Never send money, especially via wire
            transfer, even if the other person claims to be in an emergency.
            Sending money this way is akin to sending cash—it's extremely
            difficult to reverse the transaction or track where the money ends
            up. Additionally, never disclose information that could grant access
            to your financial accounts. If another user requests money from you,
            please report it to us promptly for assistance.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Personal Information Security
          </span>
          <p className="text-sm">
            Avoid disclosing personal details, such as your social security
            number, home or work address, or specific aspects of your daily
            routine (like frequenting a certain gym on Mondays), to individuals
            you're unfamiliar with. If you're a parent, exercise caution in
            sharing information about your children in your profile or initial
            communications. Refrain from revealing details like your children's
            names, school locations, or ages and genders to protect their
            privacy and safety.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Approach Long-Distance and Overseas Relationships with Caution
          </span>
          <p className="text-sm">
            Be cautious of individuals who claim to be from your country but are
            allegedly stuck somewhere else, particularly if they request
            financial assistance to return home. Exercise vigilance with anyone
            unwilling to meet in person or engage in a phone/video call, as they
            may not be who they claim to be. If someone avoids answering your
            questions or rushes into a serious relationship without proper
            communication or meetings, consider this a red flag.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Report All Suspicious and Offensive Behavior
          </span>
          <p className="text-sm mb-2">
            You know when someone’s crossed the line and when they do, we want
            to know about it. Block and report anyone that violates our terms.
            Here are some examples of violations:
          </p>
          <ul className="text-sm flex flex-col gap-1 mb-4">
            <li>Requests for money or donations</li>
            <li>Underage users</li>
            <li>Harassment, threats, and offensive messages</li>
            <li>
              Inappropriate or harmful behavior during or after meeting in
              person
            </li>
          </ul>
        </li>
      </ul>
      <h3 className="font-semibold mr-auto mb-2">Meeting in Person</h3>
      <ul className=" mr-auto flex flex-col gap-3">
        <li>
          <span className="text-slate-400 block mb-1">Don’t Be In A Rush</span>
          <p className="text-sm">
            Take your time and get to know the other person before agreeing to
            meet or chat off Tinder. Don’t be afraid to ask questions to screen
            for any red flags or personal dealbreakers. A phone or video call
            can be a useful screening tool before meeting.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Meet in Public and Stay in Public
          </span>
          <p className="text-sm">
            Meet for the first few times in a populated, public place — never at
            your home, your date’s home, or any other private location. If your
            date pressures you to go to a private location, end the date.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Tell Friends and Family About Your Plans
          </span>
          <p className="text-sm">
            Tell a friend or family member of your plans, including when and
            where you’re going. Have your cell phone charged and with you at all
            times.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Don’t Leave Drinks or Personal Items Unattended
          </span>
          <p className="text-sm">
            Know where your drink comes from and know where it is at all times —
            only accept drinks poured or served directly from the bartender or
            server. Many substances that are slipped into drinks to facilitate
            sexual assault are odorless, colorless, and tasteless. Also, keep
            your phone, purse, wallet, and anything containing personal
            information on you at all times.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            If You Feel Uncomfortable, Leave
          </span>
          <p className="text-sm">
            It’s okay to end the date early if you’re feeling uncomfortable. In
            fact, it’s encouraged. And if your instincts are telling you
            something is off or you feel unsafe, ask the bartender or server for
            help.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Safety;
