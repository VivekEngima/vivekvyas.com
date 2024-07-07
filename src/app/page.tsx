import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Where Am Now in Life</h1>
      <p>Physically: Not Good</p>
      <p>
        Career: I have some experience in MERN, DevOps. Made some money with it.
        Had freelancing experience of around 8-9 month. And also i can make
        really good NoCode website in couple of days
      </p>
      <p>Good Things: Fast learner, SMART</p>
      <p>
        Bad Things: Fear Of Rejection, Procastination, Lack Of
        Commitment/Discipline
      </p>
      <hr />
      <hr />
      <h1>Non-Negotiable things to do:</h1>
      <ul>
        <li>Surya Kriya (min. 3 cycles) + Yogasanas (30 sec)</li>
        <li>Journaling</li>
      </ul>
      <hr />
      <h1>Day 1 Sunday</h1>
      <p>
        I think i have made kind of great and detailed plan to start make
        $10,000 per month in 3 month time. If i play my all cards correctly and
        paitencely then it shouldn't be so hard.
      </p>
      <p>X Didn't done my daily exercise</p>
      <p>X Didn't learn anything new</p>

      <hr />
      <h1>Day 2 Monday</h1>
      <hr />
      <br />
      <hr />
      <h1>Contact</h1>
      <p>
        <Link href={`https://www.instagram.com/vivek.vy0s/`}>
          https://www.instagram.com/vivek.vy0s/
        </Link>
      </p>
    </>
  );
}
