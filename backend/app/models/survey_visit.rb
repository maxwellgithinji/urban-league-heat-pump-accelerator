class SurveyVisit < ApplicationRecord
  belongs_to :user
  has_one :survey_response
end
