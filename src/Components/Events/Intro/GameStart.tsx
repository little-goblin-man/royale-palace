import {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { GameContext } from "../../../Context/GameContext";
import { PeopleContext } from "../../../Context/PeopleContext";
import { StoryContext } from "../../../Context/StoryContext";
import { getRandomInt } from "../../Utilities/RandomNumbers";
import { PhaseProps } from "../PhaseProps";
import { VanillaPhase } from "../VanillaPhase";
import { GameStartCustomPhase } from "./GameStartCustomPhase";

export const GameStartEvent: FunctionComponent = () => {
  const gameContext = useContext(GameContext);
  const storyContext = useContext(StoryContext);
  const peopleContext = useContext(PeopleContext);

  const [currentPhaseid, setCurrentPhaseId] = useState<number>(1);

  const phases: PhaseProps[] = [
    {
      id: 1,
      title: "The travelling prince...",
      body: "As the eldest son of a rich and powerful royal family, you travelled the world enjoying your privileges and engaging in various debaucheries. You were the guest of emperors, you danced with queens and you learned the ways of rulers. One day waking up from a heavy night of pork and mead, you receive a letter...",
      options: [
        { text: "Open the letter...", nextStep: () => setCurrentPhaseId(2) },
      ],
    },
    {
      id: 2,
      title: "A kingdom awaits?",
      body: "Dearest mother and the bastard father have passed away, you read in shock. Suspicious circumstances are at play, but... wait a moment... that means...",
      options: [
        { text: "I am a king!", nextStep: () => setCurrentPhaseId(4) },
        {
          text: "Burn the letter and keep partying",
          nextStep: () => setCurrentPhaseId(3),
        },
      ],
    },
    {
      id: 3,
      title: "Damn",
      body: "You die of the plague.",
      options: [
        {
          text: "GAME OVER. CLICK TO START AGAIN.",
          nextStep: () => {
            window.location.reload();
          },
        },
      ],
    },
    {
      id: 4,
      title: "I am a king!!!",
      body: "But yet, there is so much still to figure out. The stupor of alcohol has confounded you. You try to recall basic details about your life.",
      options: [
        {
          text: "Yes... that's it, I remember now...",
          nextStep: () => setCurrentPhaseId(5),
        },
      ],
      customComponent: GameStartCustomPhase,
    },
    {
      id: 5,
      title: "I am glad that's sorted.",
      body: `It is time to set off to the kingdom which is my birthright. I shall outdo my bastard father and become the most regal king that ${storyContext.kingdomName} has ever known!`,
      options: [
        {
          text: "This is the best day of my life.",
          nextStep: () => setCurrentPhaseId(6),
        },
      ],
    },
    {
      id: 6,
      title: "One last thing before I forget",
      body: "Your younger brother Dinklebert will also be joining you at court.",
      options: [
        {
          text: "Oh. Ok then.",
          nextStep: () => {
            peopleContext.addPersonToCourt({
              forename: "Dinklebert",
              surname: peopleContext.you ? peopleContext.you.surname : "",
              birthMonth: getRandomInt(12),
              birthYear: gameContext.date.year - 20,
              gender: "male",
              happiness: 100,
            });
            gameContext.setSelectedEventId(undefined);
          },
        },
      ],
    },
  ];

  const [currentPhaseProps, setCurrentPhaseProps] = useState<PhaseProps>();

  useEffect(() => {
    setCurrentPhaseProps(phases.find((e) => e.id === currentPhaseid));
  }, [currentPhaseid]);

  return (
    <Fragment>
      {currentPhaseProps &&
        (currentPhaseProps.customComponent ? (
          <currentPhaseProps.customComponent {...currentPhaseProps} />
        ) : (
          <VanillaPhase {...currentPhaseProps} />
        ))}
    </Fragment>
  );
};
