import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={7} ml={5} mt={10}>
            <Typography align="left">
              <Typography variant="h4">Byron Zhang</Typography>
              <p>
                Hi! I'm a senior studying computer science at Princeton
                University interested in machine learning robustness. In the
                past, my work has focused on distribution shifts and data
                misrepresentations. I am fortunate to work in the{" "}
                <Link
                  target="_blank"
                  underline="hover"
                  href="https://visualai.princeton.edu/"
                >
                  Princeton Visual AI Lab
                </Link>
                , advised by Professor{" "}
                <Link
                  target="_blank"
                  underline="hover"
                  href="https://www.cs.princeton.edu/~olgarus/"
                >
                  Olga Russakovsky
                </Link>
                .
              </p>
              <p>
                In my free time, I enjoy mountaineering, ice climbing, and
                backpacking. I sing bass in the{" "}
                <Link
                  target="_blank"
                  underline="hover"
                  href="https://www.princetonfootnotes.com"
                >
                  Princeton Footnotes
                </Link>
                .
              </p>
              <br></br>
              <Typography align="left">
                <Link underline="hover" href="mailto:byronzhang@princeton.edu">
                  {"    "}Email{"   "}
                </Link>
                /
                <Link underline="hover" href="zhang_byron_cv.pdf">
                  {"    "}CV{"    "}
                </Link>
                /
                <Link underline="hover" href="https://github.com/bzzbbz">
                  {"    "}
                  Github{"    "}
                </Link>
                /
                <Link
                  underline="hover"
                  href="https://www.linkedin.com/in/byron-zhang/"
                >
                  {"    "}
                  LinkedIn{"    "}
                </Link>
                /
                <Link underline="hover">
                  {"    "}Twitter{"   "}
                </Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid xs={3} mt={10} ml={5}>
            <Box
              sx={{ maxWidth: "100%" }}
              component="img"
              src="byron2.jpg"
            ></Box>
          </Grid>
          <Grid ml={5} mt={15} mb={5}>
            {" "}
            <Typography variant="h5">Publications</Typography>
          </Grid>
          <Grid container>
            <Grid container item ml={5} spacing={2}>
              <Grid item xs={3} mr={5}>
                <Box
                  component="img"
                  src="ood.png"
                  sx={{ maxWidth: "100%" }}
                ></Box>
              </Grid>
              <Grid item xs={7} textAlign="left">
                <Typography variant="h6">
                  Rethinking Out-of-Distribution Detection
                </Typography>
                <Typography>
                  William Yang*, <b>Byron Zhang*</b>, Olga Russakovsky
                </Typography>
                <Typography>
                  Under Review in <i>CVPR 2023</i>
                </Typography>
                <br></br>
                <Typography>
                  <Link underline="hover">
                    {"["}Paper{"]"}
                  </Link>
                  {"    "}
                  <Link underline="hover">
                    {"["}Code{"]"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid container ml={5} mt={3} item spacing={2}>
                <Grid item xs={3} mr={5}>
                  <Box
                    component="img"
                    src="pandaset.png"
                    sx={{ height: "100%", maxWidth: "100%" }}
                  ></Box>
                </Grid>
                <Grid item xs={7} textAlign="left">
                  <Typography variant="h6">
                    PandaSet: Advanced Sensor Suite Dataset for Autonomous
                    Driving
                  </Typography>
                  <Typography>
                    Pengchuan Xiao, Zhenlei Shao, Steven Hao,{" "}
                    <b>Zishuo Zhang</b>, Xiaolin Chai, Judy Jiao, Zesong Li,
                    Jian Wu, Kai Sun, Kun Jiang, Yunlong Wang, Diange Yang
                  </Typography>
                  <Typography>
                    <i>
                      IEEE Intelligent Transportation Systems Conference (ITSC)
                      2023
                    </i>
                  </Typography>
                  <br></br>
                  <Typography>
                    <Link underline="hover">
                      {"["}Paper{"]"}
                    </Link>
                    {"    "}
                    <Link underline="hover">
                      {"["}Website{"]"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid ml={5} mt={15} textAlign="left">
              {" "}
              <Typography variant="h5">Projects</Typography>
            </Grid>
            <Grid container>
              <Grid container ml={5} mt={3} item spacing={2}>
                <Grid item xs={3} mr={5}>
                  <Box
                    component="img"
                    src="iws22.png"
                    sx={{ height: "100%", maxWidth: "100%" }}
                  ></Box>
                </Grid>
                <Grid item xs={7} textAlign="left">
                  <Typography variant="h6">
                    Score Calibration using Common Patterns in Object Detection
                  </Typography>
                  <Typography>
                    <b>Byron Zhang</b>, Sunnie Kim, Olga Russakovsky
                  </Typography>
                  <Typography>Junior Independent Work Spring 2022</Typography>
                  <br></br>
                  <Typography>
                    <Link underline="hover">
                      {"["}Paper{"]"}
                    </Link>
                    {"    "}
                    <Link underline="hover">
                      {"["}Code{"]"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid container ml={5} mt={3} item spacing={2}>
                <Grid item xs={3} mr={5}>
                  <Box
                    component="img"
                    src="iwf21.png"
                    sx={{ height: "100%", maxWidth: "100%" }}
                  ></Box>
                </Grid>
                <Grid item xs={7} textAlign="left">
                  <Typography variant="h6">
                    Taming Small Objects in Detection
                  </Typography>
                  <Typography>
                    <b>Byron Zhang</b>, Olga Russakovsky
                  </Typography>
                  <Typography>Junior Independent Work Fall 2021</Typography>
                  <br></br>
                  <Typography>
                    <Link underline="hover">
                      {"["}Paper{"]"}
                    </Link>
                    {"    "}
                    <Link underline="hover">
                      {"["}Code{"]"}
                    </Link>
                    {"    "}
                    <Link underline="hover">
                      {"["}Presentation{"]"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid container ml={5} mt={3} item spacing={2}>
                <Grid item xs={3} mr={5}>
                  <Box
                    component="img"
                    src="qcb.png"
                    sx={{ height: "100%", maxWidth: "100%" }}
                  ></Box>
                </Grid>
                <Grid item xs={7} textAlign="left">
                  <Typography variant="h6">
                    Replicating Differential Gene Analysis of Pediatric Septic
                    Shock Patients
                  </Typography>
                  <Typography>
                    <b>Byron Zhang*</b>, Jessica Yeh*, Jaebyeok Yoon*
                  </Typography>
                  <Typography>
                    Computational Biology Course Project, Fall 2021
                  </Typography>
                  <br></br>
                  <Typography>
                    <Link underline="hover">
                      {"["}Paper{"]"}
                    </Link>
                    {"    "}
                    <Link underline="hover">
                      {"["}Code{"]"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid ml={5} mt={15} mb={5} textAlign="left">
              {" "}
              <Typography variant="h5">Teaching & Service</Typography>
              <Typography>
                <ul>
                  <li>
                    <Link
                      underline="hover"
                      href="https://ai4all.princeton.edu/"
                      target="_blank"
                    >
                      Princeton AI4ALL
                    </Link>{" "}
                    Instructor, Summer 2022
                  </li>
                  <li>COS 429: Computer Vision, Fall 2021</li>
                  <li>COS 226: Algorithms and Data Structures, Fall 2020</li>
                  <li>
                    COS 126: Computer Science: An Interdisciplinary Approach,
                    Spring 2020
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
