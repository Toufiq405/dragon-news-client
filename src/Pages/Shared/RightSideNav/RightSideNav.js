import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
	FaGoogle,
	FaGithub,
	FaFacebook,
	FaWhatsapp,
	FaTwitter,
	FaTwitch,
	FaClipboardList,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../Brand/BrandCarousel/BrandCarousel";

const RightSideNav = () => {
	return (
		<div>
			<ButtonGroup vertical>
				<Button className="mb-2 " variant="outline-primary">
					<FaGoogle /> Login with Google
				</Button>
				<Button variant="outline-dark">
					<FaGithub /> Login with Github
				</Button>
			</ButtonGroup>
			<h4 className="my-4">Contact with us</h4>
			<div>
				<ListGroup>
					<ListGroup.Item className="mb-2">
						<FaFacebook /> Facebook
					</ListGroup.Item>
					<ListGroup.Item className="mb-2">
						<FaWhatsapp /> Whatsapp
					</ListGroup.Item>
					<ListGroup.Item className="mb-2">
						<FaTwitter /> Twitter
					</ListGroup.Item>
					<ListGroup.Item className="mb-2">
						<FaTwitch /> Twitch
					</ListGroup.Item>
					<ListGroup.Item className="mb-2">
						<FaClipboardList /> Terms of condition
					</ListGroup.Item>
				</ListGroup>
			</div>
			<div>
				<BrandCarousel></BrandCarousel>
			</div>
		</div>
	);
};

export default RightSideNav;
