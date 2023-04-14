import {
  Box,
  VStack,
  Progress,
  ButtonGroup,
  Select,
  Button,
  ProgressLabel,
} from "@chakra-ui/react";
import { useState } from "react";

const ProgressBar = () => {
  const [activeProgressBar, setActiveProgressBar] =
    useState<string>("progress1");
  const [progressBarValue1, setProgressBarValue1] = useState<number>(50);
  const [progressBarValue2, setProgressBarValue2] = useState<number>(10);
  const [progressBarValue3, setProgressBarValue3] = useState<number>(75);

  const handleProgressBarChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setActiveProgressBar(event.target.value);
  };

  const handleIncrement = (value: number) => {
    if (activeProgressBar === "progress1") {
      setProgressBarValue1(progressBarValue1 + value);
    } else if (activeProgressBar === "progress2") {
      setProgressBarValue2(progressBarValue2 + value);
    } else if (activeProgressBar === "progress3") {
      setProgressBarValue3(progressBarValue3 + value);
    }
  };

  const handleDecrement = (value: number) => {
    const computedBarValue = (barValue: number) => {
      return barValue - value <= 0 ? 0 : barValue - value;
    };

    if (activeProgressBar === "progress1") {
      setProgressBarValue1(computedBarValue(progressBarValue1));
    } else if (activeProgressBar === "progress2") {
      setProgressBarValue2(computedBarValue(progressBarValue2));
    } else if (activeProgressBar === "progress3") {
      setProgressBarValue3(computedBarValue(progressBarValue3));
    }
  };

  return (
    <Box margin={8}>
      <VStack spacing={2} align="stretch">
        <Progress
          colorScheme={progressBarValue1 > 100 ? "red" : "cyan"}
          height="32px"
          value={progressBarValue1}
        >
          <ProgressLabel fontSize={"16px"} color={"black"}>
            {progressBarValue1}%
          </ProgressLabel>
        </Progress>
        <Progress
          colorScheme={progressBarValue2 > 100 ? "red" : "cyan"}
          height="32px"
          value={progressBarValue2}
        >
          <ProgressLabel fontSize={"16px"} color={"black"}>
            {progressBarValue2}%
          </ProgressLabel>
        </Progress>
        <Progress
          colorScheme={progressBarValue3 > 100 ? "red" : "cyan"}
          height="32px"
          value={progressBarValue3}
        >
          <ProgressLabel fontSize={"16px"} color={"black"}>
            {progressBarValue3}%
          </ProgressLabel>
        </Progress>
      </VStack>

      <ButtonGroup mt={"16px"} variant="solid" spacing="6">
        <Select
          variant="filled"
          value={activeProgressBar}
          aria-label="Select progress bar"
          onChange={handleProgressBarChange}
        >
          <option value="progress1">#Progress1</option>
          <option value="progress2">#Progress2</option>
          <option value="progress3">#Progress3</option>
        </Select>
        <Button onClick={() => handleDecrement(25)}>-25</Button>
        <Button onClick={() => handleDecrement(10)}>-10</Button>
        <Button onClick={() => handleIncrement(10)}>10</Button>
        <Button onClick={() => handleIncrement(25)}>25</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ProgressBar;
