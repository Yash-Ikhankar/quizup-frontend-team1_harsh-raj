import QuizCard from "./QuizCard";
import { Flex } from "./styled/Flex.styled";
import { StyledSection } from "./styled/Section.styled";
import { StyledButton } from "./styled/Button.styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFiveQuizzes, reset } from "../features/quizzes/quizSlice";
import { useEffect } from "react";

function QuizSection() {
	const dispatch = useDispatch();
	const { quizzes, isError, isLoading, message } = useSelector(
		(state) => state.quizzes
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getFiveQuizzes());

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message]);

	if (isLoading) {
		return <h5>Loading...</h5>;
	}

	return (
		<StyledSection>
			<Flex seeMoreBtn>
				<h3>Take a look at these popular quizzes for today...</h3>
				<Link to={"/quiz"}>
					<StyledButton>See More</StyledButton>
				</Link>
			</Flex>
			<Flex>
				{quizzes.length > 0 ? (
					quizzes.map((quiz) => <QuizCard key={quiz._id} item={quiz} />)
				) : (
					<h4>Cant't find any quizzes. Sorry for inconvenience...</h4>
				)}
			</Flex>
		</StyledSection>
	);
}

export default QuizSection;
