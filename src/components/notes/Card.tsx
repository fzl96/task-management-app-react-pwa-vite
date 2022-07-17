import type { NoteType } from "../../utils/types";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";

interface Props {
  note: NoteType;
}

const Card: React.FC<Props> = ({ note }) => {
  let createdAt;
  const noteDate: Date = note.createdAt.toDate();

  if (noteDate) {
    createdAt = format(noteDate, "MMM dd");
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm min-h-[10rem]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-md">{note.body}</p>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineCalendar />
          <p className="uppercase text-sm font-semibold">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
