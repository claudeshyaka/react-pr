// 1) import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';


import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.image()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Good day for a walk!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                        image={faker.image.image()} 
                        author="Alex" 
                        timeAgo="Today at 1:00AM" 
                        content="Nice blog post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.image()} 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="It is sunny."
                />
            </ApprovalCard>

        </div>
    );
};

// 5) Show the component on the screen
root.render(<App/>);
