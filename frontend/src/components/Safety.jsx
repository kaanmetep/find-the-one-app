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
        Meeting new people is exciting, but you should always be cautious when
        interacting with someone you don’t know. Use your best judgment and put
        your safety first, whether you are exchanging initial messages or
        meeting in person. While you can’t control the actions of others, there
        are things you can do to help you stay safe during your Tinder
        experience.
      </p>
      <h3 className="font-semibold mr-auto mb-2">Online Safety</h3>
      <ul className=" mr-auto flex flex-col gap-3">
        <li>
          <span className="text-slate-400 block mb-1">
            Never Send Money or Share Financial Information
          </span>
          <p className="text-sm">
            Never send money, especially over wire transfer, even if the person
            claims to be in an emergency. Wiring money is like sending cash —
            it’s nearly impossible to reverse the transaction or trace where the
            money went. Never share information that could be used to access
            your financial accounts. If another user asks you for money, report
            it to us immediately.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Protect Your Personal Information
          </span>
          <p className="text-sm">
            Never share personal information, such as your social security
            number, home or work address, or details about your daily routine
            (e.g., that you go to a certain gym every Monday) with people you
            don’t know. If you are a parent, limit the information that you
            share about your children on your profile and in early
            communications. Avoid sharing details such as your children’s names,
            where they go to school, or their ages or genders.
          </p>
        </li>
        <li>
          <span className="text-slate-400 block mb-1">
            Be Wary of Long Distance and Overseas Relationships
          </span>
          <p className="text-sm">
            Watch out for scammers who claim to be from your country but stuck
            somewhere else, especially if they ask for financial help to return
            home. Be wary of anyone who will not meet in person or talk on a
            phone/video call—they may not be who they say they are. If someone
            is avoiding your questions or pushing for a serious relationship
            without meeting or getting to know you first — that’s a red flag.
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
