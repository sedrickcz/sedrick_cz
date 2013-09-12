Refinery::Inquiries::InquiriesController.class_eval do
  respond_to :html, :js
  def create
    @inquiry = ::Refinery::Inquiries::Inquiry.new(params[:inquiry])

    if @inquiry.save
      if @inquiry.ham? || Refinery::Inquiries.send_notifications_for_inquiries_marked_as_spam
        begin
          ::Refinery::Inquiries::InquiryMailer.notification(@inquiry, request).deliver
        rescue
          logger.warn "There was an error delivering an inquiry notification.\n#{$!}\n"
        end

        begin
          ::Refinery::Inquiries::InquiryMailer.confirmation(@inquiry, request).deliver
        rescue
          logger.warn "There was an error delivering an inquiry confirmation:\n#{$!}\n"
        end if ::Refinery::Inquiries::Setting.send_confirmation?
      end
    end
    respond_with @inquiry
  end
end