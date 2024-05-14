import TestimonialItem from "./TestimonialItem";
function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 container mx-auto gap-4 text-sm mb-12 p-3">
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Sean & Marianna
        </span>
        <p>
          After going on a few dates and having a few fun nights I came across
          Miranda. After reading her profile I couldn’t resist swiping right
          after reading her final sentence... ‘Looking for my super babe for
          life.’ After talking for about a week we went out on our first date
          and I knew there was something special about her!
        </p>
      </TestimonialItem>
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Jack & Allison
        </span>
        <p>
          After going on a few dates and having a few fun nights I came across
          Miranda. After reading her profile I couldn’t resist swiping right
          after reading her final sentence... ‘Looking for my super babe for
          life.’ After talking for about a week we went out on our first date
          and I knew there was something special about her!
        </p>
      </TestimonialItem>
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Marry & Chris
        </span>
        <p>
          After going on a few dates and having a few fun nights I came across
          Miranda. After reading her profile I couldn’t resist swiping right
          after reading her final sentence... ‘Looking for my super babe for
          life.’ After talking for about a week we went out on our first date
          and I knew there was something special about her!
        </p>
      </TestimonialItem>
    </div>
  );
}

export default Testimonials;
