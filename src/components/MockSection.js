import MockCard from "./MockCard";
import { Flex } from "./styled/Flex.styled";
import { StyledSection } from "./styled/Section.styled";
import { StyledButton } from "./styled/Button.styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, getFiveExams } from "../features/exams/examSlice";
import { useEffect } from "react";

function MockSection() {
	const dispatch = useDispatch();
	const { exams, isError, isLoading, message } = useSelector(
		(state) => state.exams
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getFiveExams());

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
				<h3>Here are some Exams for you to explore...</h3>
				<Link to={"/exams"}>
					<StyledButton>See More</StyledButton>
				</Link>
			</Flex>
			<Flex>
				{exams.map((exam) => (
					<MockCard key={exam._id} item={exam} />
				))}
			</Flex>
		</StyledSection>
	);
}

export default MockSection;
