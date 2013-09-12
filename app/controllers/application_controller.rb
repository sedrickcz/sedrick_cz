class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :init_categories_and_tags_and_contact

  protected
    def init_categories_and_tags_and_contact
       @categories = Refinery::Blog::Category.translated
       @tags = Refinery::Blog::Post.tag_counts_on(:tags)
       #@inquiry = ::Refinery::Inquiries::Inquiry.new
    end
end
