import Image from "next/image";
import { site } from "@/lib/config";

function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo">{children}</span>;
}

export default function Author() {
  const a = site.author;

  return (
    <section className="s-flat day pt0">
      <div className="wrap author">
        {a.photo ? (
          <Image className="avatar-img" src={a.photo} alt={a.name || "The author"} width={200} height={200} />
        ) : (
          <div className="avatar">Your photo here</div>
        )}
        <div className="prose">
          <h2>Why I wrote this</h2>
          <p style={{ marginTop: 20 }}>
            Hi, I'm {a.name || <Todo>[your name]</Todo>}.{" "}
            {a.story || (
              <Todo>
                [Two or three sentences in your own voice: your own history with anxious thoughts, and what a daily
                habit of Scripture and prayer changed for you.]
              </Todo>
            )}
          </p>
          <p>
            {a.note || (
              <Todo>
                [One honest sentence about who this is for, and what it isn't. For example: I'm not a counselor, and
                this isn't a cure. It's the practice that kept bringing me back to God.]
              </Todo>
            )}
          </p>
          <p className="muted">{a.name || <Todo>[Your name]</Todo>}</p>
        </div>
      </div>
    </section>
  );
}
