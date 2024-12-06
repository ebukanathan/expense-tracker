import "./App.css";
import CategoryCard from "./components/CategoryCard";
import ExpenseCard from "./components/ExpenseCard";
import TransactionCard from "./components/TransactionCard";
import house from "./assets/house.png";
import health from "./assets/healthcare.png";
import investment from "./assets/loan.png";
import transport from "./assets/public-transport.png";
import food from "./assets/salad.png";
import linkein from "./assets/linkedin.png";
import office from "./assets/office.png";
import netflix from "./assets/netflix.png";
import youtube from "./assets/social.png";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 m-2  justify-center items-center md:flex-row">
        <div className="flex w-[400px] bg-[#fff] relative bg-yellow-200 justify-around items-center rounded-lg">
          <div className=" h-[200px]  w-[200px] absolute left-[-20px]  rounded-[100px] bg-cyan-300 border-0">
            <img src="" alt="" />
          </div>
          <div className=" flex flex-col ml-6 justify-start items-start my-2">
            <h3 className="font-thin text-base">Good Morning,</h3>
            <h3 className="font-semibold text-lg">Sophie Campbell</h3>
            <p className="font-thin text-xs">22 august Thursday</p>
            <p className="font-thin text-xs mt-3">Month:August arr</p>
            <div className="p-2 bg-sky-300">Bar</div>
            <p className="font-thin text-xs">Remaining Days</p>
            <p className="font-thin text-xs">05 weekdays</p>
            <p className="font-thin text-xs">04 weekends & Holidays</p>
          </div>
        </div>
        <div className="w-[400px]   bg-[#fff]  rounded-lg p-2">
          <h3 className="font-semibold text-lg text-left">Budget Vs Expense</h3>
          <p className="font-thin text-xs  text-left">from 01-22 August</p>
        </div>
        <div className="w-[400px]  bg-[#fff]  rounded-lg p-2">
          <h3 className="font-semibold text-lg text-left">
            Expense Distribution
          </h3>
          <p className="font-thin text-xs  text-left">from 01-22 August</p>
          <div className="flex ">
            <ul className="font-normal text-sm list-disc p-3 w-1/3">
              <li className="text-left">Bills and Utility</li>
              <li className="text-left">Food</li>
              <li className="text-left">Personal</li>
              <li className="text-left">Healthcare</li>
              <li className="text-left">Education</li>
              <li className="text-left">Transport</li>
              <li className="text-left">Investment</li>
              <li className="text-left">Other</li>
            </ul>
            <div className="grid place-items-center w-2/3">Piechart</div>
          </div>
        </div>
      </div>
      {/* section two */}
      <div className="flex flex-col justify-center gap-2 md:flex-row">
        <div className=" w-full md:w-2/3">
          <h3 className="font-semibold text-lg text-left">
            Category wise Expenses
          </h3>
          <div className="grid  grid-cols-2 gap-4 p-4 md:grid-cols-4">
            <CategoryCard src={house} />
            <CategoryCard src={food} />

            <CategoryCard src={health} />

            <CategoryCard src={investment} />

            <CategoryCard src={transport} />
            <CategoryCard src={transport} />

            <CategoryCard src={health} />

            <CategoryCard src={food} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 md:w-1/3 ">
          <div className="">
            <h3 className="font-semibold text-lg text-left">
              Upcoming Expenses
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ExpenseCard src={linkein} />
              <ExpenseCard src={office} />
              <ExpenseCard src={netflix} />
              <ExpenseCard src={youtube} />
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold text-lg text-left">
              Recent Transaction
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
