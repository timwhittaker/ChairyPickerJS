import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import "./gaussian.js";
var gaussian = require('./gaussian');
// Dictionary which holds names on values of members
// Should make this a database later

var currentChair;

var members = {
  Anna:1,
  Boris:0,
  Daniel:2,
  Erik:2,
  Eric:2,
  Guillaume:0,
  Haomiao:0,
  Huan:2,
  Luis:2,
  Max:0,
  Michael:0,
  NMichael:0,
  Nils:0,
  Rami:0,
  Soham:0,
  Tim:0,
  Will:2,
  Zhenwei:0,
  Zhen:1,
  Feng:1,
  Reed:1,
  Conner:0,
  Aman:0
};

var previous_chairs = {
  Anna:0,
  Boris:1,
  Daniel:0,
  Erik:0,
  Eric:0,
  Guillaume:0,
  Haomiao:2,
  Huan:0,
  Luis:0,
  Max:1,
  Michael:2,
  NMichael:2,
  Nils:1,
  Rami:1,
  Soham:2,
  Tim:2,
  Will:0,
  Zhenwei:1,
  Zhen:0,
  Feng:2,
  Reed:1,
  Conner:2,
  Aman:0
};

var member_scores = {
  Anna:0,
  Boris:0,
  Daniel:0,
  Erik:0,
  Eric:0,
  Guillaume:0,
  Haomiao:0,
  Huan:0,
  Luis:0,
  Max:0,
  Michael:0,
  NMichael:0,
  Nils:0,
  Rami:0,
  Soham:0,
  Tim:0,
  Will:0,
  Zhenwei:0,
  Zhen:0,
  Feng:0,
  Reed:0,
  Conner:0,
  Aman:0
};

var nextChair = "Click Submit for next chair";

function computeScore(values)
{
  let i;
  for (i=0; i < values.speakers.length; i++)
  {
    member_scores[values.speakers[i]] += 2;
  }
  for (i=0; i < values.commenters.length; i++)
  {
    member_scores[values.commenters[i]] += 1;
  }
  for(const key in members)
  {
    member_scores[key] += members[key] + 2*previous_chairs[key]
  }

  
  var distribution = gaussian(0, 35);
  // Take a random sample using inverse transform sampling method.
  
  var sample = Math.floor(Math.abs(distribution.ppf(Math.random())));
  let j;
  let values_score = [];
  let sorted_names = [];

  var clone_members_scores = Object.assign({},member_scores);

  for (const key in members)
  {
    values_score.push(members[key]);
  }

  values_score.sort();
  for (j in values_score)
  {
    for (const key in clone_members_scores)
    {
      if(clone_members_scores[key]==j)
      {
        sorted_names.push(key);
        delete clone_members_scores[key]
        

        if(values.chair[0]!=undefined)
        {
          if (sorted_names[sorted_names.length-1] == values.chair)
          {
            sorted_names.pop();
          }
        }
        else
        {
          console.log("Chair empty");
        }
        
      }
    }
  }
  for (i in sorted_names)
  {
    console.log(sorted_names[i]);
  }
  nextChair=sorted_names[sample];
}

// Form stuff
const Speakers = () => (
  <div>
  <div>
    <h1>Speakers</h1>
    <Formik
      
      initialValues={{ speakers: [], commenters: [], chair: []}}
      onSubmit={(values) =>
        setTimeout(() => {
          computeScore(values);
        }, 1)
      }
      render={({ values }) => (
        <Form autocomplete="off">
          <FieldArray
            name="speakers"
            render={(arrayHelpers) => (
              <div>
                {values.speakers && values.speakers.length > 0 ? (
                  values.speakers.map((speakers, index) => (
                    <div key={index}>
                      <Field name={`speakers.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a speaker
                  </button>
                )}
                
              </div>
            )}
          />
          <h1>Commenters</h1>
          <FieldArray
            name="commenters"
            render={(arrayHelpers) => (
              <div>
                {values.commenters && values.commenters.length > 0 ? (
                  values.commenters.map((commenters, index) => (
                    <div key={index}>
                      <Field name={`commenters.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a commenter
                  </button>
                )}
                
              </div>
            )}
          />
          
          <h1>Current Chair</h1>
          <FieldArray
            name="chair"
            render={(arrayHelpers) => (
              <div>
                {values.chair && values.chair.length > 0 ? (
                  values.chair.map((chair, index) => (
                    <div key={index}>
                      <Field name={`chair.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a chair
                  </button>
                )}
                
              </div>
            )}
          />
          <div>
                  <button type="submit">Submit</button>
          </div>
          <div>
          <h1>Next Chair:</h1>
          <p>{nextChair}</p>
          </div>
        </Form>
      )}
    />
  </div>
  </div>
);

export {Speakers};



