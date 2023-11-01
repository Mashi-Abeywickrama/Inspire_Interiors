import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { LinearProgress } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import Needlepie from "./../../components/admin/needlepie";
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
    Designs: 4,
    Requests: 24,
    Partnership: 20,
  },
  {
    name: "Feb",
    Designs: 3,
    Requests: 13,
    Partnership: 22,
  },
  {
    name: "Mar",
    Designs: 20,
    Requests: 8,
    Partnership: 22,
  },
  {
    name: "April",
    Designs: 27,
    Requests: 39,
    Partnership: 2,
  },
  {
    name: "May",
    Designs: 18,
    Requests: 48,
    Partnership: 21,
  },
  {
    name: "Jun",
    Designs: 23,
    Requests: 38,
    Partnership: 25,
  },
  {
    name: "July",
    Designs: 34,
    Requests: 43,
    Partnership: 21,
  },
];
const data2 = [
  {
    name: "Jan",

    Requests: 2400,
    Partnership: 2400,
  },
  {
    name: "Feb",

    Requests: 1398,
    Partnership: 2210,
  },
  {
    name: "Mar",

    Requests: 9800,
    Partnership: 2290,
  },
  {
    name: "April",

    Requests: 3908,
    Partnership: 2000,
  },
  {
    name: "May",

    Requests: 4800,
    Partnership: 2181,
  },
  {
    name: "June",

    Requests: 3800,
    Partnership: 2500,
  },
  {
    name: "July",

    Requests: 4300,
    Partnership: 2100,
  },
];
function DesignerDashboard() {
  return (
    <div className="overview-container container rounded-3 mb-4 me-5 ">
      <div className="d-flex col-12 flex-column gap-3 flex-lg-row">
        {/* first */}
        <div className="p-3 bg-light rounded shadow col-lg-7">
          <p className="primary fs-5 text-primary">
            <b>Project Engagement</b>
          </p>
          <BarChart
            width={650}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {" "}
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 100]} />
            {/* <Tooltip /> */}
            <Legend
              width={350}
              wrapperStyle={{
                bottom: -5,
                right: 150,
                backgroundColor: "#ffff",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <Bar dataKey="Requests" fill="#F5B640" />
            <Bar dataKey="Designs" fill="#035C94" />
            <Bar dataKey="Partnership" fill="#096c86" />
          </BarChart>
        </div>
        {/* Second */}
        <div className="p-4 bg-light rounded-3 shadow px-5 col-lg-4">
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
            <b>12</b> Partnership
          </div>
          <br></br>
          <div
            className="fs-4 text-center p-3 rounded-2 px-5"
            style={{ background: "#FFC00C", color: "#ffff" }}
          >
            <b>1000</b> Requests
          </div>
          <br></br>
        </div>
        {/* Third */}
        {/* <div className="p-4 bg-light rounded-3 shadow px-5 col-lg-3">
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
        </div> */}
      </div>

      <div className="d-flex flex-column flex-lg-row gap-3 m-3 col-12">
        <div className="p-2 bg-light rounded-3 shadow col-lg-11">
          <p className="primary fs-6 text-primary">
            <b>Total Revenue</b>
          </p>
          <p className="primary fs-5 text-primary">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LKR 10.5 K</b>
          </p>
          <LineChart
            width={950}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 60,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
            <Legend />
            <Line
              type="monotone"
              dataKey="Partnership"
              stroke="#096c86"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Requests"
              stroke="#FFC00C"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
        {/* <div className="p-3 bg-light rounded-3 shadow">
          <p className="primary fs-6 text-primary col-lg-4">
            <b>Trend Analysis</b>
          </p>
          <div className="d-flex">
            <Needlepie />
          </div>
        </div> */}
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
