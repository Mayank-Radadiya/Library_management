import BookList from "@/components/global/BookList";
import BookOverview from "@/components/global/BookOverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks.slice(1)}
        className="mt-28"
      />
    </>
  );
}
