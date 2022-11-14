import { Link } from "react-router-dom";
import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function MockCard({ item: { name, image, tests, id } }) {
	return (
		<StyledMockCard>
			<StyledIcon>
				<img src={`./images/exam-icons/${image}`} alt={name} />
			</StyledIcon>
			<p>{name}</p>
			<Link to={`/tests/${id}`}>
				<Button>Explore tests</Button>
			</Link>
		</StyledMockCard>
	);
}

export default MockCard;
