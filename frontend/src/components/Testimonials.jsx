import TestimonialItem from "./TestimonialItem";
function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 container mx-auto gap-4 text-sm mb-12 p-3">
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Sean & Marianna
        </span>
        <p>
          After a few enjoyable dates and some fun nights out, I came across
          Sean. His profile caught my eye, especially his closing line: 'Seeking
          my partner in crime.' After chatting for about a week, we decided to
          go on our first date, and I immediately felt a special connection with
          him!
        </p>
      </TestimonialItem>
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Jack & Allison
        </span>
        <p>
          After a series of enjoyable dates and fun nights out, I stumbled upon
          Allison. Her profile caught my attention immediately, especially her
          closing line: 'Searching for my forever adventure partner.' After
          chatting for about a week, we finally met for our first date, and I
          felt an instant connection with her!
        </p>
      </TestimonialItem>
      <TestimonialItem>
        <span className="border-b-2 pb-1 mb-4 block font-semibold text-base">
          Marry & Chris
        </span>
        <p>
          Following a few exciting dates and memorable evenings, I encountered
          Chris. His profile intrigued me, especially his closing words: 'Hoping
          to find my partner in crime.' After chatting for about a week, we
          decided to meet up for our first date, and I could sense there was
          something extraordinary about him!
        </p>
      </TestimonialItem>
    </div>
  );
}

export default Testimonials;
