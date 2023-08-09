import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { LinearProgress } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function DesignerDashboard() {
  return (
    <div className="overview-container rounded-3 mb-4">
      <div className="d-flex flex-row gap-2 m-3 flex-wrap">
        {/* first */}
        <div className="p-3 bg-light rounded shadow">
          <p className="primary fs-5 text-primary">
            <b>Project Engagement</b>
          </p>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {" "}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              width={200}
              wrapperStyle={{
                bottom: -5,
                right: 120,
                backgroundColor: "#ffff",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <Bar dataKey="pv" fill="#F5B640" />
            <Bar dataKey="uv" fill="#035C94" />
            <Bar dataKey="amt" fill="#98A3B2" />
          </BarChart>
        </div>
        {/* Second */}
        <div className="p-4 bg-light rounded-3 shadow px-5">
          <p className="primary fs-5 text-primary">
            <b>Summery View</b>
          </p>
          <br></br>
          <div
            className="fs-4 text-center p-3 rounded-2 px-5 "
            style={{ background: "#035C94", color: "#ffff" }}
          >
            <b>50</b> Designs
          </div>
          <br></br>
          <div
            className="fs-4 text-center p-3 rounded-2 px-5"
            style={{ background: "#096C86", color: "#ffff" }}
          >
            <b>12</b> Partnerships
          </div>
          <br></br>
          <div
            className="fs-4 text-center p-3 rounded-2 px-5"
            style={{ background: "#FFC00C", color: "#ffff" }}
          >
            <b>1000</b> Earned
          </div>
          <br></br>
        </div>
        {/* Third */}
        <div className="p-4 bg-light rounded-3 shadow px-5">
          <p className="primary fs-5 text-primary">
            <b>Average Rating</b>
          </p>
          <br></br>
          <div
            className="fs-4 text-center p-3 rounded-4 px-5"
            style={{ background: "#104F77", color: "#ffff" }}
          >
            <b>4.5</b>
            <br></br>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              readOnly
            />
          </div>
          <br></br>

          <div className="">
            <div
              style={{ color: "#000" }}
              className="d-flex flex-row align-items-center"
            >
              5 <AiFillStar color="#1976D2" />
            </div>
            <LinearProgress
              value={70}
              variant="determinate"
              style={{ height: "8px", borderRadius: "5px" }}
            />

            <div
              style={{ color: "#000" }}
              className="d-flex flex-row align-items-center"
            >
              4 <AiFillStar color="#1976D2" />
            </div>
            <LinearProgress
              value={50}
              variant="determinate"
              style={{ height: "8px", borderRadius: "5px" }}
            />
            <div
              style={{ color: "#000" }}
              className="d-flex flex-row align-items-center"
            >
              3 <AiFillStar color="#1976D2" />
            </div>
            <LinearProgress
              value={30}
              variant="determinate"
              style={{ height: "8px", borderRadius: "5px" }}
            />
            <div
              style={{ color: "#000" }}
              className="d-flex flex-row align-items-center"
            >
              2 <AiFillStar color="#1976D2" />
            </div>
            <LinearProgress
              value={60}
              variant="determinate"
              style={{ height: "8px", borderRadius: "5px" }}
            />
            <div
              style={{ color: "#000" }}
              className="d-flex flex-row align-items-center"
            >
              1 <AiFillStar color="#1976D2" />
            </div>
            <LinearProgress
              value={10}
              variant="determinate"
              style={{ height: "8px", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row gap-2 m-3 flex-wrap">
        <div className="p-2 bg-light rounded-3 shadow">
          <p className="primary fs-6 text-primary">
            <b>Total Revenue</b>
          </p>
          <p className="primary fs-5 text-primary">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LKR 10.5 M</b>
          </p>
          <LineChart
            width={700}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="p-2 bg-light rounded-3 shadow">
          <p className="primary fs-6 text-primary">
            <b>Trend Analysis</b>
          </p>
        </div>
      </div>
      {/* <Flex className="w-100" gap="2" h="calc(40vh)" wrap="wrap">
        <Box className="w-100"bg="white"  borderRadius="lg" boxShadow="base">
          {" "}
          Hii
        </Box>
        <Box bg="white"  borderRadius="lg" boxShadow="base">
          Hee
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="base">
          Who
        </Box>
      </Flex>
      <br></br>
      <Flex className="w-100" gap="2" h="calc(45vh)" wrap="wrap">
        <Box bg="white"   borderRadius="lg" boxShadow="base">
          {" "}
          Hii
        </Box>
        <Box bg="white" w="20em" borderRadius="lg" boxShadow="base">
          Hee
        </Box>
      </Flex> */}
    </div>
  );
}

export default DesignerDashboard;
