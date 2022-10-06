import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";
import {
  Checkbox,
  FormControlLabel,
  Link,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

const CHARTS = [
  { title: "Amount Organizations", value: "213", percentage: -1.3 },
  {
    title: "Data Quality Organizations",
    value: "325 Errors",
    percentage: -1.2,
  },
  { title: "Automatic Updates", value: "40", percentage: 2.3 },
  { title: "Overlap with Communitypool", value: "82%", percentage: 2.3 },
];

const STEPS = [
  "Create Configuration",
  "Process Data",
  "Cleanse Data",
  "Classify Data",
  "View Data",
];

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col">
        <section className="py-8">
          <h1 className="text-xl font-bold">
            Welcome to the CDQ Hometown Data Mirror
          </h1>
          <p>
            This application will enable you to maintain your own masterdata in
            order to keep it up to update within the CDQ sharing network.
          </p>
          <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {CHARTS.map((chart, i) => (
              <div
                key={i}
                className="h-36 flex flex-col border border-gray-100 shadow-sm rounded-lg bg-white p-4 pt-3"
              >
                <h2 className="font-medium text-gray-500">{chart.title}</h2>
                <div className="mt-6 flex-1 flex items-end justify-between gap-2">
                  <div className="flex flex-col">
                    <p className="text-3xl font-bold mb-2">{chart.value}</p>
                    <div
                      className={`flex items-center leading-none ${
                        chart.percentage > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <span className="font-semibold flex flex-nowrap">
                        {Math.abs(chart.percentage)}%
                      </span>
                      <span>
                        {chart.percentage < 0 ? (
                          <ArrowLongDownIcon
                            strokeWidth={2.5}
                            className="w-4 h-4"
                          />
                        ) : (
                          <ArrowLongUpIcon
                            strokeWidth={2.5}
                            className="w-4 h-4"
                          />
                        )}
                      </span>
                      <span className="ml-1 text-gray-500 text-sm">
                        than last year
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[50%] flex-1 bg-gray-300 text-gray-500 self-stretch">
                    Chart placeholder
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold">Create Family Tree Process</h1>
          <div className="flex flex-wrap py-4">
            <aside className="left py-4 pr-8 pl-0 w-full md:max-w-fit">
              <Stepper orientation="vertical" activeStep={0}>
                {STEPS.map((step, i) => (
                  <Step key={i}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </aside>
            <div className="right flex-1 py-4 px-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h2 className="text-center text-lg font-bold">
                Create your first configuration
              </h2>
              <h3 className="underline underline-offset-1">Step 1</h3>
              <p className="text-justify">
                Decide if you want to use data from your CDQ Data Mirror or if
                you want to upload new data. If you want to upload new data,
                please use the form provided in the "Create Configuration"
                process.
                <br />
                <br />
                Cleanse Data Classify Data View Data You can also create a
                mapping. Please then map your column names with the CDQ data
                model. If you are not familiar with the data model, please
                contact your CDQ Customer Success Manager to help you via:
                CSM@CDQ.com
              </p>
              <br />
              <h3 className="underline underline-offset-1">Step 2</h3>
              <p className="text-justify">
                That it is. You have made your first step into excellent data
                quality! Now try it out by clicking on the following button:
              </p>
              <p className="text-center">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Create Configuration"
                />
              </p>
              <p className="text-right">
                <Link>
                  Click here to enter your data manually and to skip these steps
                  for now
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
